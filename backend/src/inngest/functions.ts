import { Inngest } from "inngest";
import {functions as aiFunctions} from "./aiFunctions";

export const inngest = new Inngest({ id: "uwise" });



export const functions = [
  ...aiFunctions
];