import express from "express";
import bodyParser from "body-parser";
const  app = express();
const PORT = 3000;
const tasks=[
{
id:1,
title:"learn",
done:true
},
{
id:2,
title:"build",
done:false
},
{
id:3,
title:"test",
done:true
}
];
app.use(bodyParser.json());
app.get("/", (req, res) => {
  console.log('[GET ROUTE]');
    res.json({name :"task API",version: "1.0",endpoints:["/tasks"]});

});
app.get("/health", (req,res)=>{
  res.json({status:"ok"});
});
app.get("/tasks" , (req,res)=>{
  res.json(tasks);
});
app.get("/tasks/:id", (req, res) => {
 const id=Number(req.params.id);
 const task=tasks.find(task=>task.id===id);
if (!task) {
  return res.status(404).json({
    error: `Task ${id} not found`
  });
}
res.json(task);
});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
