import styled from "styled-components";

const P = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.82px;
`;
const TRHEAD = styled.tr`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  text-align: left;
  width: 38px;
  height: 15px;
`;
const Payment = () => {
  const paymentData = [
    {
      name: "Karthi",
      schedule: "First",
      billNumber: "0000122323",
      amountPaid: "INR 35,000",
      balance: "INR 55,000",
      date: "08 Dec 2021",
    },
    // Add more data here...
  ];

  return (
    <div>
      <div className="flex justify-between ml-6 mr-6">
        <P>Payment Details</P>
        <svg className="mt-3" width="14" height="22" fill="none">
          <g clipPath="url(#clip0_21_315)">
            <path
              d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z"
              fill="#FEAF00"
            />
          </g>
        </svg>
      </div>

      <div>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Payment Schedule</th>
              <th>Bill number</th>
              <th>Amount Paid</th>
              <th>Balance Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index} className="text-center">
                <td>{payment.name}</td>
                <td>{payment.schedule}</td>
                <td>{payment.billNumber}</td>
                <td>{payment.amountPaid}</td>
                <td>{payment.balance}</td>
                <td>{payment.date}</td>
                <td>
                  <svg width="15" height="14" fill="none">
                    <g clipPath="url(#clip0_21_389)">
                      <path
                        d="M7.49999 7.875C7.94201 7.875 8.36594 7.69063 8.6785 7.36244C8.99106 7.03425 9.16665 6.58913 9.16665 6.125C9.16665 5.66087 8.99106 5.21575 8.6785 4.88756C8.36594 4.55937 7.94201 4.375 7.49999 4.375ZM14.9094 6.60078C13.4971 3.70754 10.7013 1.75 7.49999 1.75C4.29868 1.75 1.50207 3.70891 0.0906108 6.60105C0.0310383 6.72479 0 6.86149 0 7.00014C0 7.13878 0.0310383 7.27549 0.0906108 7.39922C1.50285 10.2925 4.29868 12.25 7.49999 12.25C10.7013 12.25 13.4979 10.2911 14.9094 7.39895C14.9689 7.27521 15 7.13851 15 6.99986C15 6.86122 14.9689 6.72451 14.9094 6.60078ZM7.49999 2.625Z"
                        fill="#FEAF00"
                      />
                    </g>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
