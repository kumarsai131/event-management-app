import { useEffect, useState } from "react";
import { addEventAPI, getEventsAPI } from "../utils/apis";

export default function Home() {
  const [event, setEvent] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  function getEvents() {
    getEventsAPI()
      .then((res) => {
        if (res.data.success) {
          setAllEvents(res.data.events);
        }
      })
      .catch((err) => {
        setErrors(err);
      });
  }

  function addEvent() {
    setLoading(true);
    setErrors(null);
    const payload = {
      name: event,
      createdAt: new Date(),
    };

    addEventAPI(payload)
      .then((res) => {
        if (res.data.success) {
          setEvent("");
          getEvents();
        }
      })
      .catch((err) => {
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Enter a event"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <button disabled={!event} onClick={addEvent}>
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>Add Event</>
        )}
      </button>

      <div className="mt-4">
        {allEvents.map((e) => {
          return (
            <>
              <div>{e.name}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}
