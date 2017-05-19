const loanJSON = {
  id: 1,
  name: 'Pomoc investorů investorovi',
  story: 'Mala hystorie',
  purpose: '8',
  photos: [
    {
      name: 'file.png',
      url: '/loans/88873/photos/8937',
    },
  ],
  userId: 114025,
  nickName: 'zonky114025',
  termInMonths: 38,
  interestRate: 0.0499,
  rating: 'AAAA',
  topped: null,
  amount: 350000,
  remainingInvestment: 234200,
  investmentRate: 0.33085714285714285,
  covered: false,
  datePublished: '2017-05-14T17:09:54.768+02:00',
  published: true,
  deadline: '2017-05-16T16:50:50.922+02:00',
  investmentsCount: 229,
  questionsCount: 1,
  region: '14',
  mainIncomeType: 'SELF_EMPLOYMENT',
};

describe('<loanJSON object for testing  />', () => {
  it('it it will be changed Layout and ListView test will be changed also', () => {
    expect(loanJSON).toMatchSnapshot();
  });
});

export default loanJSON;
