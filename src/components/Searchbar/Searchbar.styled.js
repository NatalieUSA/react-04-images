import styled from 'styled-components';

export const Header = styled.header`
   {
    top: 0;
    left: 0;
    position: sticky;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: black;
    box-shadow: 0px 2px 4px -1px rgba(224, 15, 15, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    z-index: 1;
  }
`;

export const Form = styled.form`
   {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 13px;
    overflow: hidden;
  }
`;

export const Button = styled.button`
   {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLWljb24tMTI0LnBuZw.png');
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    background-color: white;
    margin-left: 4px;
    margin-right: 4px;

    :hover {
      opacity: 1;
    }
  }
`;

export const ButtonLabel = styled.span`
   {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

export const FormInput = styled.input`
   {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    outline: none;
    padding-left: 15px;
    padding-right: 5px;

    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
