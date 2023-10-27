import { format } from "date-fns";

export const DateUtil = {
  getOnlyDate: (date) => {
    return format(date, "dd-MMM-yyyy");
  },
};
