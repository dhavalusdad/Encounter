import parse from 'html-react-parser';
import React from 'react';

interface HtmlParserProps {
  html: string | HTMLElement;
}

export const HtmlParser: React.FC<HtmlParserProps> = ({ html }) => {
  const convertToHtml = () => {
    try {
      const htmlString = typeof html === 'string' ? html : html.outerHTML;
      return parse(htmlString);
    } catch {
      return null;
    }
  };

  return convertToHtml(); // No redundant fragment needed
};

export default HtmlParser;
