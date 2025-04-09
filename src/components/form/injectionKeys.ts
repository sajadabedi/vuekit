import type { InjectionKey } from 'vue';

interface FormFieldContext {
  id: string;
  error: string | undefined;
}

export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<FormFieldContext>;
