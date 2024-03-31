import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CompanyPage from '../src/app/company/page';
import { useRouter } from 'next/router';
import styles from '../src/app/page.module.css.mock'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Company page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    const mockRouter = {
      pathname: '/company',
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockImplementation(() => mockRouter);
    render(<CompanyPage />);
  });

  test('Each link functions correctly', () => {
    const companyInfoLink = screen.getByText('企業情報');
    const contactLink = screen.getByText('問い合わせ');

    fireEvent.click(companyInfoLink);
    expect(useRouter().push).toHaveBeenCalledWith('/company/detail');

    fireEvent.click(contactLink);

    // モーダルまたはフォームが開くことを想定し、テストを追加
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    // 閉じるボタンのテスト
    const closeButton = screen.getByText('閉じる');
    fireEvent.click(closeButton);
    expect(modal).not.toBeInTheDocument();
  });

  test('Page contains a paragraph', () => {
    const paragraph = screen.getByText(/企業の基本情報を閲覧・編集可能/);
    expect(paragraph).toBeInTheDocument();
  });

  test('Page contains two buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
