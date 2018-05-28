# trivia-game
A simple trivia app using React Native
Configurations possible:
  - No. of questions
  - Type of questions: True/False, MCQ
  - Difficulty level: Easy, Medium, Hard
  - Marks per correct answer
  
# Android Screenshots
Splash Screen  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/1_splash.png)

Home Screen  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/2_home.png)

Loading Screen  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/3_loading.png)

Quiz Screen  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/4_quiz.png)

Results Screen Top  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/5_results_1.png)

Results Screen Bottom  
![alt text](https://github.com/harshadabhanose/trivia-game/blob/master/Demo%20Screenshots/5_results_2.png)

# Assumptions
  - Play Again CTA will start the game again with a new set of questions

# Clone the repository
Clone the repository into an empty folder on your local machine.
`$git clone https://github.com/harshadabhanose/trivia-game`

# Add node_modules
Run the following command from your project folder to install node_modules  
`npm install` OR  
`yarn`  
followed by  
`react-native link`

# Changing the default configuration settings
In the `src/AppConfig.js` file, edit following parameters to change the default settings for no. of questions, difficulty, type of questions and marks per question
`export const selectedTriviaType = triviaType.BOOLEAN;
export const selectedTriviaDifficulty = triviaDifficulty.HARD;
export const marksPerQuestion = 1;
export const totalQuestions = 10;`

# Running your application 
Connect your android device to the machine OR open the Android emulator from Android Studio  
Run following command to run your application:  
`react-native run-android`  
If everything is set up correctly, you should see your new app running in your Android emulator shortly.
