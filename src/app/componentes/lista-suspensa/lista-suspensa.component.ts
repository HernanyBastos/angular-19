import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-lista-suspensa',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './lista-suspensa.component.html',
  styleUrl: './lista-suspensa.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListaSuspensaComponent),
      multi: true
    },
  ],
})
export class ListaSuspensaComponent implements ControlValueAccessor {
  label = input<string>();
  id = input<string>();
  opcoes: GeneroLiterario[] = [
      { id: 'romance', value: 'Romance' },
      { id: 'misterio', value: 'Mistério' },
      { id: 'fantasia', value: 'Fantasia' },
      { id: 'ficcao-cientifica', value: 'Ficção Científica' },
      { id: 'tecnicos', value: 'Técnicos' },
      { id: 'suspense', value: 'Suspense' },
  ];

  private innerValue: GeneroLiterario | null = null;

  get value(): GeneroLiterario | null {
    return this.innerValue;
  }

  set value(v: GeneroLiterario | null) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  onChange: (value: GeneroLiterario | null) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(v: GeneroLiterario | null): void {
    this.value = v;
  }

  registerOnChange(fn: (value: GeneroLiterario | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
