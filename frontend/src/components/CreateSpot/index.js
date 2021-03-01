import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewSpot } from "../../store/spots";

function CreateSpot() {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const spot = {
      body,
      userId: 1,
    };
    dispatch(createNewSpot(spot));
  };
  return (
    <form obSubmit={handleSubmit}>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter Your Spot Here."
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default CreateSpot;
