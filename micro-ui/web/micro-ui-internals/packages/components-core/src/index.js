import {
  ActionBar,
  ActionLinks,
  Amount,
  AppContainer,
  BackButton,
  Banner,
  BodyContainer,
  BreadCrumb,
  BreakLine,
  Button,
  Card,
  CardBasedOptions,
  CardCaption,
  CardHeader,
  CardLabel,
  CardLabelError,
  CardText,
  CheckBox,
  CitizenHomeCard,
  CitizenInfoLabel,
  CollapseAndExpandGroups,
  ConnectingCheckPoints,
  DatePicker,
  DisplayPhotos,
  Dropdown,
  ErrorMessage,
  Footer,
  Header,
  HeaderBar,
  HorizontalNav,
  InfoBanner,
  PageBasedInput,
  InputTextAmount,
  KeyNote,
  LabelFieldPair,
  Loader,
  LoaderScreen,
  MobileNumber,
  MultiSelectDropdown,
  NoResultsFound,
  OTPInput,
  Paragraph,
  PlusMinusInput,
  PopUp,
  PrivateRoute,
  RadioButtons,
  Rating,
  RemoveableTag,
  SVG,
  // Table,
  Telephone,
  TextArea,
  TextInput,
  Toast,
  UploadFile,
  WhatsNewCard,
  Numeric
} from "./atoms";

import { FieldComposer, FieldController, Fields, FormComposerV2, Modal, UploadFileComposer } from "./hoc";

import {
  ApiDropdown,
  CustomDropdown,
  DetailsCard,
  FormStep,
  InputCard,
  LocationDropdownWrapper,
  MultiUploadWrapper,
  SearchAction,
  SearchForm,
  SearchField,
  SearchOnRadioButtons,
  TextInputCard,
} from "./molecules";

import { initCoreLibraries } from "@egovernments/digit-ui-libraries-core";

initCoreLibraries().then(() => {
  console.log("DIGIT Contants enabled", window?.Digit);
});

export {
  ActionBar,
  ActionLinks,
  Amount,
  AppContainer,
  BackButton,
  Banner,
  BodyContainer,
  BreadCrumb,
  BreakLine,
  Button,
  Card,
  CardBasedOptions,
  CardCaption,
  CardHeader,
  CardLabel,
  CardLabelError,
  CardText,
  CheckBox,
  PageBasedInput,
  CitizenHomeCard,
  CitizenInfoLabel,
  CollapseAndExpandGroups,
  ConnectingCheckPoints,
  DatePicker,
  DisplayPhotos,
  Dropdown,
  ErrorMessage,
  Footer,
  Header,
  HeaderBar,
  HorizontalNav,
  InfoBanner,
  InputTextAmount,
  SearchField,
  KeyNote,
  LabelFieldPair,
  Loader,
  LoaderScreen,
  MobileNumber,
  MultiSelectDropdown,
  NoResultsFound,
  OTPInput,
  Paragraph,
  PlusMinusInput,
  PopUp,
  PrivateRoute,
  RadioButtons,
  Rating,
  RemoveableTag,
  SVG,
  // Table,
  Telephone,
  TextArea,
  TextInput,
  Toast,
  UploadFile,
  WhatsNewCard,
  FieldComposer,
  FieldController,
  Fields,
  FormComposerV2,
  Modal,
  UploadFileComposer,
  ApiDropdown,
  CustomDropdown,
  DetailsCard,
  FormStep,
  InputCard,
  LocationDropdownWrapper,
  MultiUploadWrapper,
  SearchAction,
  SearchForm,
  SearchOnRadioButtons,
  TextInputCard,
  Numeric
};
