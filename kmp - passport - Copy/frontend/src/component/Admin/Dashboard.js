import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
    <div>
      <h3>
        {title === "Income" && "₹"}
        {value}
      </h3>
      <p>{title}</p>
    </div>
  );

const Dashboard = () => {

    const data = {
        labels: ["Processing", "Shipped", "Delivered"],
        datasets: [
          {
            label: "# of orders",
            data: [2, 3, 4],
            backgroundColor: [
              "rgba(159,63,176,0.1)",
              "rgba(78,63,176,0.2)",
              "rgba(156,0,60,0.3)",
            ],
            borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
            borderWidth: 1,
          },
        ],
      };


  return (
    <div className='dashboard'>
        <main>
            <article>

<Box title="Users" value={213}/>
<Box title="Orders" value={23}/>
<Box title="Income" value={1000}/>

            </article>
            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>

<aside>
<Doughnut data={data} />
</aside>

                </div>
            </section>
        </main>
    </div>
  )
}
 
export default Dashboard