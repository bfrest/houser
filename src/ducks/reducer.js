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

const UPDATE_STEP1 = "UPDATE_STEP1";
const UPDATE_STEP2 = "UPDATE_STEP2";
const UPDATE_STEP3 = "UPDATE_STEP3";

export default function reducuer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case UPDATE_STEP1:
      return Object.assign({}, state, { name: action.payload, address: action.payload, city: action.payload, state: action.payload, zipcode: action.payload });

    case UPDATE_STEP2:
      return Object.assign({}, state, { image: action.payload });

    case UPDATE_STEP3:
      return Object.assign({}, state, { monthly_mortgage: action.payload, desired_rent: action.payload });
  }
}

export function updateStep1(name, address, city, state, zipcode) {
  return {
    type: UPDATE_STEP1,
    payload: {
      name,
      address,
      city,
      state,
      zipcode
    }
  };
}

export function updateStep2(image) {
  return {
    type: UPDATE_STEP2,
    payload: {
      image
    }
  };
}

export function updateStep3(monthly_mortgage, desired_rent) {
  return {
    type: UPDATE_STEP3,
    payload: {
      monthly_mortgage,
      desired_rent
    }
  };
}
