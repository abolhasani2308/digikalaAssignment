import React from 'react';
import {useTranslation} from 'react-i18next';
import ParagraphContext from '../paragraph-context/ParagraphContext.component';
import ParagraphTitle from '../paragraph-title/ParagraphTitle.component';
import {ProductDescriptionProps} from './ProductDescription.types';

export default function ProductDescription(
  props: ProductDescriptionProps,
): React.JSX.Element {
  const {context} = props;
  const {t} = useTranslation();

  return (
    <>
      <ParagraphTitle title={t('briefDescription')} />
      <ParagraphContext context={context} />
    </>
  );
}
