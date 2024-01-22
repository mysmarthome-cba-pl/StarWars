# StarWars

Task description:
// Your task will be to create a STAR WARS application. You decide where to place the elements on the page and what they will ultimately look like. Try to ensure visual accuracy and correct display of elements up to 1366px. Follow the rules of good practice. The view will be created based on the provided rowData object, which is located in the script.js file. Any interactivity will need to be handled with DOM manipulation methods.

// A) Parse the rowData variable from the json format to create an object.
// B) Based on the keys in the object (people, planets, films, species, vehicles, starships), create 6 buttons and display them on the page. Key names are to be extracted from the object, not hardcoded. You can try combining the Object.keys() and map() functions. The application only starts with these 6 buttons.
// C) Connect logic to each button. Clicking on it should display the text "Table" on the page, it doesn't matter where, only functionality matters. When you first start the application, the text does not appear.
// D) Change the logic from the previous task as follows. Clicking the button should display data in the console based on the name of the clicked button. Example - I click on the button with the text people and the console displays data from the people key.
// E) Adjust the logic in the button so that clicking on it creates a table with headers such as:
// - ID
// - any 3 keys from the currently clicked object (for example, for the people field it will be NAME, BIRTH YEAR AND GENDER) - choose which ones
// - CREATED AT
// - ACTIONS
// F) Under the headings, display all data from the category of the clicked button
// -ID - Ordinal number starting from 1
// -3 any values, e.g. | Luke Skywalker | 19BBY | small |
// -CREATED AT - value taken from the "created" field changed to the format DD-MM-YYYY. The value in the field created:"2014-12-10T15:18:20.704000Z" is to be presented as 10-12-2014
// -ACTIONS - two buttons need to be created
// G) Below the table, add a view containing elements without supported logic - the view should appear simultaneously with the table. There is no table, no elements underneath. These elements are:
// - Button with left arrow icon,
// - Button with right arrow icon,
// - On the right side there should be a select button with values 10 and 20
// - Place input with placehodler 1 between the arrows
// H) Add logic to the trash button that will remove the appropriate row from the table.
// I) Add logic to the plus button. After clicking on it, an additional window should appear in which we display all the data of the current row. This can be a two-column table with the name of the key and the value assigned to it. In the case of the people field, the following keys should be displayed: birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, url, vehicles along with the corresponding values.
// J) In the additional window, place an X button and assign logic that handles closing the window
// K) Place a checkbox inside the baskets:
// - The user can select multiple lines at once by checking their checkboxes.
// - When at least one row is selected, an additional button appears below the table. Once clicked, all selected rows will be removed from the table.
// *L) Add search engine by id. You need to create an input that will accept a digit. The input should display a placeholder corresponding to the range of numbers that can be entered. In the case of the films button, placeholder 1 - 6 should be displayed because we only have 6 items, in the case of people it will be 1 - 82. Next to the input, place a button with a function that will filter our array and leave a line with the index entered by the user in the search engine.
// **M) Add add another type of search engine along with an activation button as in the previous task. Filtering should work by the "name" field, or in the case of a movie, by the "title" field. So here you need to properly handle placeholders conditionally, e.g. Search by name, Search by title. The search engine should work on the principle of searching for a string of characters in the entire string. If we enter the letter "b", lines should be displayed in which the string from the name or title field has the letter "b"
// ** N) Restrict the display of items in the table based on the selected value in the select created in task G). The default value is 10 so the table by default also displays 10 items, when item 20 is selected the table will display 20 items.
// *** O) To the input from task G) add the ability to enter numbers from the range 1 to the number of pages. For example, in people there are 82 elements. The number of pages will be 9. Next to the input, display information on how many pages are available, e.g. [1] of 9. Entering the appropriate number in the input will display specific elements from the corresponding page. After entering 5, positions 41-50 etc. will be displayed. The arrow buttons should also be used here to move to subsequent pages. However, they should be locked respectively: the left one - when we are on the first page - should be inactive and greyed out, and the right one - when we are on the last page.
// *** P) Add two buttons at the very top of the application and implement logic to change the theme (can be from light to dark)
// *** R) Add hidden functionality, e.g. after entering the text "vader" on the keyboard, we should hear a sound - if you want, it can be music from the Star Wars movie
// **** S) Customize pagination like this:
// - Information about the number of pages added next to the input should change depending on the selected value in select.
// - When the number of pages is 1, the buttons are disabled
// - When we are, for example, on page 3 or 4 with the default number of elements on the page (10) - items 21-30 or 31-40 are displayed). When we select the value 20 in select, the range (21-40) should be displayed on the page and the page number should change to 2. It should work both ways. If we now change the range to 10, the page count should change to 3 (21-30
