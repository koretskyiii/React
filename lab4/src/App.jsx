import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import StepperLayout from "./components/StepperLayout";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const App = () => {
  return (
    <Router>
      <Box sx={{ width: "100%", mt: 5, p: 2 }}>
        <Routes>
          <Route path="/" element={<StepperLayout />}>
            <Route index element={<Step1 />} />
            <Route path="step2" element={<Step2 />} />
            <Route path="step3" element={<Step3 />} />
          </Route>
        </Routes>
      </Box>
    </Router>
  );
};

export default App;