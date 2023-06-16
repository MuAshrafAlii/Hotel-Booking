import { ref } from "vue";

const getHotels = () => {
  const allHotels = ref([]);

  const loadHotels = async () => {
    try {
      let allHotelsResponse = await fetch("http://localhost:3000/hotels");
      if (!allHotelsResponse.ok) {
        throw Error("No Hotels Available");
      }
      allHotels.value = await allHotelsResponse.json();
    } catch (err) {
      console.log(err.message);
    }
  };

  return { allHotels, loadHotels };
};

export default getHotels;
