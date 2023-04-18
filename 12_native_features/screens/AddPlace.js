import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigatie("AllPlaces", {
      place,
    });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;