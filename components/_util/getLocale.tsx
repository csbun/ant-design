import assign from 'object-assign';

export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  const locale = context && context.antLocale && context.antLocale[componentName] ?
    context.antLocale[componentName] : getDefaultLocale();

  const result = assign({}, locale, props.locale);
  result.lang = assign({}, locale.lang, props.locale.lang);
  return result;
}

export function getLocaleCode(context) {
  return (context && context.antLocale && context.antLocale.locale) || 'zh-cn';
}
