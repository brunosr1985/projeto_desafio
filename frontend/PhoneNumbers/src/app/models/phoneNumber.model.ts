import { Person } from "./person.model";

export class PhoneNumber {
  id: string;
  phoneNumber: string;
  person: Person;
  type: string;
}
