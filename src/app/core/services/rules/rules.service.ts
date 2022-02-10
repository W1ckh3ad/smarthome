import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rule } from '../../models/rule.model';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  _rules = new BehaviorSubject<Rule[]>([]);
  constructor() {}

  addOrEdit(rule: Rule) {
    let current = this._rules.value;
    const index = current.findIndex((x) => x.id === rule.id);
    if (index > -1) {
      current.splice(index, 1, rule);
    }
    this._rules.next(index > -1 ? [...current] : [...current, rule]);
  }

  delete(rule: Rule) {
    let current = this._rules.value;
    const index = current.findIndex((x) => x.id === rule.id);
    if (index > -1) {
      current.splice(index, 1);
    }
    this._rules.next([...current]);
  }

  get rules() {
    return this._rules.value;
  }

  get rules$() {
    return this._rules;
  }
}
