import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./Articles/Articles";
import Faq from "./Faq/Faq";
import QuizDashboard from "./QuizDashboard/QuizDashboard";
import Consultation from "./Consultation/Consultation";
import quiz1 from "./quizzes/quiz1.json";
import quiz2 from "./quizzes/quiz2.json";
import Quiz from "./Quiz/Quiz";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/articles' component={Articles} />
      <Route path='/faq' component={Faq} />
      <Route path='/quiz' component={QuizDashboard} />
      <Route path='/quiz1' component={() => <Quiz quiz={quiz1} />} />
      <Route path='/quiz2' component={() => <Quiz quiz={quiz2} />} />
      <Route path='/consultation' component={Consultation} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
