from fastapi import FastAPI, Query, Header
from typing import Annotated, Union
from pydantic import BaseModel

app = FastAPI()



class Employee(BaseModel):
    user_id :int
    employee_id:str
    name: str
    icon: str
    birthday: int
    sex: int
    hire_date:int
    department_id: int
    position_id: int
    employee_status:str
    point:int

    



@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/employee")
def read_employee(authorization: Union[str,None] = Header(default=None), skip: int=0, limit: Annotated[int, Query(ge=1, le=10)]=10):
    return {"emploee": Employee[skip: skip+limit]}