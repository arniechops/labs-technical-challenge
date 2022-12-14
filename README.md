# Frontend Challenge Fall '22

This platform allows you to 

1. See all courses
2. Search courses by name/description/course number
3. Filter courses by course prerequisites
4. Add courses to cart
5. Remove courses from cart
6. Checkout

## Files

1. **App.tsx**

All the routes are defined here

2. **AppRoot.tsx**

Is the root component for the entire app. Handles top-level functionality and states that children will need access to like the search bar string, tags selected, courses in the cart, etc. Rendered at the / route.

3. **Search.tsx**

Allows search and filter. Manages the state of user input, but does not filter results based on it.

4. **Courses.tsx**

Filters courses based on user input (state changes from Search.tsx) and renders them in a grid. Filter and Search criteria are both combined to show results. Filtering based on prereqs is a OR relationship - if I select CIS 120, all courses with a prereq of that will show up. If I also select CIS 160, all courses with a prereq of 120 OR 160 will show up.

5. **Course.tsx**

Main functionality for each course. Renders basic data about the course based on data from the JSON file, allows add-to-cart functionality. Also navigates user to the cart whenever a new course is added.

6. **PrereqFilter.tsx**

Handles rendering and stage management of the dropdown. Stores filter criteria like courses selected in the dropdown but does not filter it - Courses.tsx does that. 

7. **DropDownElement.tsx**

Renders a dropdown element. Handles clicking and color functionality, updates global state with new tags selected.

8. **Cart.tsx**

Handles all courses in the cart. Renders children CartCourse elements.

9. **CartCourse.tsx**

Courses currently in the cart. Manages remove from cart functionality.

10. **Checkout.tsx**

Page displayed when user checks out, shows courses bought, and a link to go back to the home page.

11. **CheckoutCourse.tsx**

Courses currently in checkout. 

12. **Nav.tsx**

Made no changes to this

13. **ModalComponent.tsx**

Handles modal that pops up when Know more is clicked on a course. Shows full description, cross-listed courses and prereqs. Prereqs are bifuracted based on whether its a course or a suggestion - this is done by checking the length of the prereq string.

