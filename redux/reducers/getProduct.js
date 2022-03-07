//action
export const provideProduct = (payload) => {
  return { type: "PROVIDE_VALUE", payload };
};

export const IncreseQty = (payload) => {
  return { type: "IncreseQty", payload };
  const item = state.find(
    (item) => item.id === action.payload.Ingridents.Quantity
  );
  item.quantity++;
};
export const DecreaseQty = (payload) => {
  return { type: "DecreaseQty", payload };
  const item = state.find(
    (item) => item.id === action.payload.Ingridents.Quantity
  );/*  */
  item.quantity--;
};
const initial = {
  value: {
    ID: 19231,
    Name: "Crunchy Jalapeno Sandwich",
    NameNative: "سندويتش كرانشى هالابينو",
    Description:
      "Lettuce, jalapeno bombers, mayonnaise, tortilla chips, sliced cheese and 100% breast fillet.",
    DescriptionNative:
      "خس، هالابينو بومبرز، مايونيز، رقائق التورتيا، جبنة و100٪ صدر دجاج فيليه مقرمش",
    ImagePath:
      "https://texaswebservice.paradigmsys.info/imagerepository/2f425d41-9cbf-4606-b72f-ad510ebce7d1_.png",
    DefaultPrice: 1.7,
    ItemType: 3,
    DisplayOrder: 0,
    CanBeSpicy: true,
    CanBeLTO: false,
    LTOName: "",
    LTONameNative: "",
    HaveACombo: true,
    HaveSizes: true,
    IsOnlyACombo: false,
    ComboID: 3226,
    IsSpicy: false,
    Sizes: null,
    Ingridents: [
      {
        ID: 294,
        Name: "Salad  ",
        NameNative: "سلطة",
        Description: "",
        DescriptionNative: "",
        ImagePath:
          "https://texaswebservice.paradigmsys.info/imagerepository/salad.png",
        Price: 0.1,
        IsDefault: true,
        DisplayOrder: 0,
        MaxQuantity: 6,
        Quantity: 1,
        SelectedQuantity: null,
      },
      {
        ID: 297,
        Name: "Lettuce  ",
        NameNative: "خس",
        Description: "",
        DescriptionNative: "",
        ImagePath:
          "https://texaswebservice.paradigmsys.info/imagerepository/lettuce.png",
        Price: 0.1,
        IsDefault: true,
        DisplayOrder: 0,
        MaxQuantity: 6,
        Quantity: 1,
        SelectedQuantity: null,
      },
      {
        ID: 444,
        Name: "Nacho Strips",
        NameNative: "قطع ناشو ",
        Description: "",
        DescriptionNative: "",
        ImagePath: "https://texaswebservice.paradigmsys.info/imagerepository/",
        Price: 0.1,
        IsDefault: true,
        DisplayOrder: 0,
        MaxQuantity: 6,
        Quantity: 1,
        SelectedQuantity: null,
      },
      {
        ID: 463,
        Name: "Jalapeno Bombers",
        NameNative: "هالابينو تشيز بومبرز",
        Description: "",
        DescriptionNative: "",
        ImagePath: "https://texaswebservice.paradigmsys.info/imagerepository/",
        Price: 0.2,
        IsDefault: true,
        DisplayOrder: 0,
        MaxQuantity: 6,
        Quantity: 1,
        SelectedQuantity: null,
      },
      {
        ID: 1776,
        Name: "Mayonnaise",
        NameNative: "مايونيز",
        Description: "",
        DescriptionNative: "",
        ImagePath:
          "https://texaswebservice.paradigmsys.info/imagerepository/mayonnaise.png",
        Price: 0.1,
        IsDefault: true,
        DisplayOrder: 0,
        MaxQuantity: 6,
        Quantity: 1,
        SelectedQuantity: null,
      },
    ],
    CategoryID: 19,
    Calories: " -",
  },
};
const getProduct = (state = initial, action) => {
  if (action.type === PROVIDE_VALUE) {
    console.log(action);
    return {
      ...state,
      value: action.payload.product,
    };
  }
  if (action.type === IncreseQty) {
    console.log(action);
    return {
      ...state,
      value: action.payload,
    };
  }
  return state;
};

export default getProduct;
