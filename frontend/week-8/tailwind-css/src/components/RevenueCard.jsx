
export function RevenueCard({ title, orderCount, amount }) {
    return (
        <div className="bg-white rounded shadow-md p-4 max-w-xs mx-auto">
          <div className="text-gray-700 font-semibold text-sm">{title}</div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-xl font-bold text-gray-900">₹{amount}</div>
            {orderCount ? (
              <div className="flex items-center text-blue-500 text-sm">
                <span className="underline">{orderCount} order(s)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
