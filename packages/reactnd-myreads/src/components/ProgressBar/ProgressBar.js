import React from "react";
import Bar from "./Bar";
import Container from "./Container";
import { NProgress } from "@tanem/react-nprogress";

const ProgressBar = ({ isLoading, nKey }) => (
  <NProgress isAnimating={isLoading} key={nKey}>
    {({ isFinished, progress, animationDuration }) => (
      <Container isFinished={isFinished} animationDuration={animationDuration}>
        <Bar progress={progress} animationDuration={animationDuration} />
        {/*
            This example doesn't use a spinner component so the UI stays
            tidy. You're free to render whatever is appropriate for your
            use-case.
        */}
      </Container>
    )}
  </NProgress>
);

export default ProgressBar;
