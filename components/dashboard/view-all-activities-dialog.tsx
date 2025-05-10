"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Edit, Filter, MoreHorizontal, Search, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Import the activities data
import { getActivities } from "@/lib/api"

interface ViewAllActivitiesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface Activity {
  id: string
  type: string
  date: string
  duration: string
  distance?: string
  calories: number
  icon: string
}

export function ViewAllActivitiesDialog({ open, onOpenChange }: ViewAllActivitiesDialogProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [activityType, setActivityType] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
  const [activities, setActivities] = useState<Activity[]>([])
  
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities()
        setActivities(data)
      } catch (error) {
        console.error("Failed to fetch activities:", error)
      }
    }
    
    fetchActivities()
  }, [])
  
  const filteredActivities = activities.filter((activity: Activity) => {
    let match = true;
    
    // Filter by date if selected
    if (date) {
      match = match && activity.date.includes(format(date, "yyyy-MM-dd"));
    }
    
    // Filter by activity type if selected
    if (activityType) {
      match = match && activity.type.toLowerCase() === activityType.toLowerCase();
    }
    
    // Filter by search query
    if (searchQuery) {
      match = match && activity.type.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return match;
  });

  // Clear all filters
  const clearFilters = () => {
    setDate(undefined);
    setActivityType(undefined);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>All Activities</DialogTitle>
          <DialogDescription>View and manage all your fitness activities</DialogDescription>
        </DialogHeader>
        
        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search activities..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <Select value={activityType} onValueChange={setActivityType}>
              <SelectTrigger className="w-[130px] h-10">
                <SelectValue placeholder="Activity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="cycling">Cycling</SelectItem>
                <SelectItem value="swimming">Swimming</SelectItem>
                <SelectItem value="yoga">Yoga</SelectItem>
                <SelectItem value="weight-training">Weight Training</SelectItem>
                <SelectItem value="walking">Walking</SelectItem>
              </SelectContent>
            </Select>
            
            {(date || activityType || searchQuery) && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-10">
                Clear
              </Button>
            )}
          </div>
        </div>
        
        {/* Activities list */}
        <div className="space-y-6">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No activities found matching your filters
            </div>
          ) : (
            filteredActivities.map((activity) => (
              <div key={activity.id} className="flex items-start border-b pb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="" alt={activity.type} />
                  <AvatarFallback className="text-lg">{activity.icon}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">{activity.type}</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        {activity.calories} cal
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit activity
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete activity
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span className="mr-2">{activity.duration}</span>
                    {activity.distance && (
                      <>
                        <span className="mr-2">•</span>
                        <span>{activity.distance}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Footer with action buttons */}
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}




