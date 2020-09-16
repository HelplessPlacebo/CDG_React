# CDG_React

cappabilities :  
1)adding a worklog by click on the button, at this time the timer starts, you can pause it and fill in the fields for the worklog (issue name , worklog name)
3) after click on stop button -  timer will be stoped and u will see modal window
4) in the modal window you can change work time, issue name and worklog name
5)You can delete worklog ( if u try to delete nesting worklog all them items will be delete to)
6)  u can also look at favorites worklogs by clicking on the favorites button and here u can add ur favorites worklogs 
7)added a calendar showing the current date, in it you can select any day of the month, later it will be possible to show worklogs for the selected day

problems : 
1)in the dropdown calendar non-main days of the month are not displayed, this problem (this problem is relevant only on github)
2)it is possible to delete the worklog while the timer is running, in which case the worklog will be deleted,
and the timer will not disappear until it stops (in this case, a new worklog will be created with filled data)
3)the initial time values on the timeline (in the modal window) are shifted to the
left of the form and only when one of the sliders moves, they fall into place
4)if on the timeline you release the holding of the mouse button before the cursor stops, the mark will eventually take an incorrect position
5) the timer stop button on the worklog simply stops the timer and closes the timer window, without the appearance of modal windows and saving the results, on the one hand it can be convenient if the timer was started by mistake and in order not to delete it, you can simply click on this button and the timer result  will reset, on the other hand - not knowing this possibility can be critical in the work
