import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../useHooks/useAuth";
import useAxios from "../../../../useHooks/useAxios";
import { TiGroup } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { FaDrumstickBite } from "react-icons/fa";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid , PieChart, Pie, Sector, ResponsiveContainer, Legend } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
  const { user } = useAuth();
  const axiosSucure = useAxios();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSucure.get("/admin-stats");
      return res.data;
    },
  });

  //
  const { data: chartdata = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = axiosSucure.get("/order-stats");
      return res.data;
    },
  });
  // ---------- custome shap the bar chart -------------
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );

};

    const pichartData = chartdata.map(data => {
        return {name : data.category , value : data.revenue}
    })

  return (
    <div className="text-center ">
      <h1 className="text-4xl">
        <span>Hi , Wellcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h1>
      <div className="stats my-10 p-5 text-black bg-white shadow">
        <div className="stat">
          <div className="stat-title text-black">Reveneu</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc text-black">Jan 1st - Feb 1st</div>
          {/* <div className="stat-figure text-secondary">
                <TiDaller
          </div> */}
        </div>

        <div className="stat">
          <div className="stat-title text-black">Users</div>
          <div className="stat-value">{stats.user}</div>
          <div className="stat-desc text-black">↗︎ 400 (22%)</div>
          <div className=" text-4xl stat-figure text-success">
            <TiGroup></TiGroup>
          </div>
        </div>

        <div className="stat text-center">
          <div className="stat-title text-black">Menu Items</div>
          <div className="stat-value text-4xl">{stats.menuIems}</div>
          <div className=" text-yellow-400 text-4xl stat-figure">
            <FaDrumstickBite />
          </div>
        </div>

        <div className="stat">
          <div className="text-4xl stat-figure text-secondary">
            <GrDeliver />
          </div>
          <div className="stat-title text-black">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc text-black">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartdata}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartdata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pichartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pichartData.map((index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <Legend></Legend>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
