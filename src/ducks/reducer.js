const initialState = {
  name: "reduxname",
  address: "reduxaddress",
  city: "reduxcity",
  state: "rsate",
  zipcode: "rz",
  image_url: "ri",
  mortgage: "rm",
  desiredRent: "rr"
};

const UPDATE_FIRST_STEP = "UPDATE_FIRST_STEP";
// const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
// const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
// const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRST_STEP:
      return Object.assign({}, state, { name: action.payload });

    default:
      return state;
  }
}

export function updateFirstStep(name, address, city, state, zipcode) {
  //const { name, address, city, zipcode } = state;

  return {
    type: UPDATE_FIRST_STEP,
    payload: {
      name,
      address,
      city,
      state,
      zipcode
    }
  };
}
