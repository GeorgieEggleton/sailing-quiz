# Sailing Quiz

My sailing Quiz game is a multiple choise quiz designed to test the users general knowledge on the subject of sailing yachts.  

A link to the live site can be found here - https://georgieeggleton.github.io/sailing-quiz/



![responsivenessmockup](/assets/images/readme-images/responsive-mockup.png)

## Features

### Current Features



#### Favicon
![Favicon](/assets/images/readme-images/favicon-screenshot.png)

I have used a sailing yacht logo as the favicon to help users identify the quiz when they have multiple tabs open. 


### Homepage
On loading the website the user is at the homepage which is styled with a nautical chart background image. This back explains to the user what the website is; a sailing quiz and directs them to click the button to play the game. 

![Homepage](/assets/images/readme-images/homepage.png)

### GamePage
Once the user has clicked the button on the home page to start the game they will be redirected to the game page. This page will display one question at a time with the 4 possible answers.

![Gamepage](/assets/images/readme-images/example-question-page.png)


#### Question Counter

Above the question is the question counter. This shows the user which number question they are on out of 10. This will automatically increment by 1 as the user works through the questions. 

![QuestionCounter](/assets/images/readme-images/questioncount-screenshot.png)

#### Question Area

Below the counter is the question area. Here the current question will be displayed. This will be selected at random from the array of questions and so will be a diffent order each time the game is played. This means even if the user plays multiple times they will have to learn the answers to the question rather than memorising the order of the answers. Once the user has answered the question this will automatically update to the next question. 

![QuestionCounter](/assets/images/readme-images/questionarea-screenshot.png)

#### Answer Area

The answer area has 4 buttons with the multiple choice options displayed in. The user is able to click anywhere on the answer they belive is correct to make thier selection. When hovering over each box before clicking the box will have a box shadow to help the user identify which one they are currently on.  

![AnswerArea](/assets/images/readme-images/answerarea.png)

Once the user has clicked on an answer the background colour of the answer chosen will change from white to green if they have chosen the correct answer, or red if they have chosen the wrong answer. This will stay like this for one second before moving onto the next quesition and resetting all background colours to white. 

![CorrectAnswer](/assets/images/readme-images/correct-answer-screenshot.jpg)

![IncorrectAnswer](/assets/images/readme-images/wrong-answer-screenshot.jpg)


#### Score Counter

At the bottom of the game area is the score. This gives the user their current score out of 10 and will increment by 1 for every correct answer given.  

![QuestionCounter](/assets/images/readme-images/score-screenshot.png)


#### Results

Once the user has completed ten questions a pop up will appear and tell them thier final score out of ten. There will also be a button to allow them to play again which will reload the game page and reset the question counter to 1 and score to 0. 

![QuestionCounter](/assets/images/readme-images/result-screenshot.png)

#### How to play

Although the game is designed to be reasonably self explanatory there is a question mark button at the top of the page. When clicked on this is will display a modal with the game instructions. To exit the model the user can click on the small 'x' at the top of the modal or anywhere outside of the modal. 

![QuestionCounter](/assets/images/readme-images/modal-screenshot.png)

### 404 Page
There is a custom 404 error page inluded in case the user was to naviage to a broken link. This will allow the user to easily navigate backk to the home page. 

![QuestionCounter](/assets/images/readme-images/404page-screenshot.png)

## Responsiveness

Media queries were used to allow the site to be responsive to use on desktop and mobile devices. the main alterations were on larger screens the 4 answer options stack 2x2 on smaller mobile devies the four answers stack in a single column. During development this was tested using Google's dev tools. After deployment this was tested on the following devices:
- MacBook Air
- iPhone 13 Pro Max
- Armor 11T


## TESTING 

All HTML and CSS have been run through the W3C validators with no errors found. 
![HomePageHTMLValidator](/assets/images/readme-images/html-validator-index.png)
![GamePageHTMLValidator](/assets/images/readme-images/html-validator-gamepage.png)
![404PageHTMLValidator](/assets/images/readme-images/html-validator-404page.png)

![CSSValidator](/assets/images/readme-images/css-validator.png)

The JavaScript code was run through JS Hint. This initaly threw up a number of minor errors such as missing semicolons, etc which we fixed and the site re-deployed. It also threw up 2 warnings 

1. 120	['number'] is better written in dot notation.
2. 119	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (answer, checkAnswer)


I tried to correct number 1 but with using the dot notation it would not reckonise the correct answer so I have set it back as it was. 

The second warning, following discussions with a tutor, was decided best to leave alone as would require major alterations to how the script worked in order to fix this and as no errors are showing in the console it is not beileved to be a big issue. 
![JSHintValidator](/assets/images/readme-images/jshint-screenshot.png)


Each page of the site was also run through Google Lighthouse and had good overall scores. 
![HomepageLighthouse](/assets/images/readme-images/homepage-lighthouse.png)
![HomepageLighthouse](/assets/images/readme-images/gamepage-lighthouse.png)


## Technologies

- HTML - The main structure of the website uses HTML.
- CSS The website was styled using custom CSS linked to an external file.
- Javascript - The code for the game was written in Javascript and linked via an external file. 
- Gitpod - The website was developed using Gitpod.
- GitHub - The site is hosted on GitHub. 
- Favicon.io - Favicon.io was used to create a small sailing boat favicon [favicon.io](https://favicon.io/favicon-converter/)
- Balsamiq - wireframes were created using [Balsamiq](https://balsamiq.com/wireframes/desktop/)
- GitHub Pages - The site is deployed using [GitHub Pages](https://github.com/GeorgieEggleton/paragon)
        The deployment steps taken were:-
            - In the GitHub repository, go to the settings
            - In the left hand menu select Pages
            - Set source to "Deploy from a branch"
            - In the Branch section set the drop down menus to "main" & "/(root)"
            - Click 'Save'

## Testing 

![Testing](/assets/images/readme-images/testing.png)


## Bugs & Fixes
On testing it was found on some screensizes the score drops off the bottom of the game area. I have not yet had a chance to fix this but suspect the componant div's within the game area are too big so need reducing. 


## Wireframe Design

Although basic the initial design was done in balsamic 

![WireframeDesign](/assets/images/readme-images/wireframe.png)


## Credits

I used the following youtube tutorial to help with the event listeners on the answer option buttons - https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx


## Possible Future Features

1. Add more questions to the arrey so that the same 10 aren't repeated each time the user plays the game. 
2. Add a second game option to include images with quesitons on navigation marks. 
3. Add moving images with COLREG questions. 








