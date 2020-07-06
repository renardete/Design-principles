import { Component } from "./components/IComponent";

export interface IShelterMediator {
  notify(sender: Component, event: string): void;
}