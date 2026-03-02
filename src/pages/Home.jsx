import { useEffect } from "react";
import { getUserProfile } from "../Services/githubApi";

useEffect(() => {
  const test = async () => {
    try {
      const data = await getUserProfile("torvalds");
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  test();
}, []);