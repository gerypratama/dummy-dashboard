import type { IUser } from "@/interface";
import { atom } from "jotai";

export const userState = atom<IUser | null>(null);
