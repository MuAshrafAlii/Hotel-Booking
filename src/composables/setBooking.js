const setBooking = () => {
  let setBookingStatus = async (hotelID, bookingStatus) => {
    try {
      let bookingRequest = await fetch(
        `http://localhost:3000/hotels/${hotelID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            booked: bookingStatus,
          }),
        }
      );

      if (!bookingRequest.ok) {
        throw new Error("Set Booking Failed");
      }
    } catch (err) {
      console.log(err.msg);
    }
  };

  return { setBookingStatus };
};

export default setBooking;
