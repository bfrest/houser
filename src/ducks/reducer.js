const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  image: "",
  monthly_mortgage: 0,
  desired_rent: 0
};

const UPDATE_FIRST_STEP = "UPDATE_FIRST_STEP";
const UPDATE_SECOND_STEP = "UPDATE_SECOND_STEP";
const UPDATE_THIRD_STEP = "UPDATE_THIRD_STEP";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRST_STEP:
      return Object.assign({}, state, { name: action.payload, address: action.payload, city: action.payload, state: action.payload, zipcode: action.payload });

    case UPDATE_SECOND_STEP:
      return Object.assign({}, state, { image: action.payload });

    case UPDATE_THIRD_STEP:
      return Object.assign({}, state, { monthly_mortgage: action.payload, desired_rent: action.payload });

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

export function updateSecondStep(image) {
  return {
    type: UPDATE_SECOND_STEP,
    payload: {
      image
    }
  };
}

export function updateThirdStep(monthly_mortgage, desired_rent) {
  return {
    type: UPDATE_THIRD_STEP,
    payload: {
      monthly_mortgage,
      desired_rent
    }
  };
}
