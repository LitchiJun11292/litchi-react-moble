import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Space } from "antd-mobile";
import {
  decrement,
  increment,
  fetchPosts,
  fetchUsers,
  addNewPost,
} from "@/models/counter";

const Redux: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const status = useSelector((state: any) => state.counter.status);
  const posts = useSelector((state: any) => state.counter.posts);
  const dispatch = useDispatch();
  // const store = useStore();
  // console.log(store);
  // console.log(store.getState());

  return (
    <Card title="Redux">
      <Card title="派发事件">
        <div>{count}</div>
        <Space>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(increment())}
          >
            加+1
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(decrement())}
          >
            减-1
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              dispatch({
                type: "counter/incrementByAmount",
                payload: 100,
              })
            }
          >
            加+100
          </Button>
        </Space>
      </Card>
      <Card title="异步加载数据（thunk）">
        <div>{status}</div>
        <Space>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(fetchPosts())}
          >
            替换单个值
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(fetchUsers())}
          >
            替换整个值
          </Button>
        </Space>
      </Card>
      <Card title="用的thunk发送数据">
        <div>{posts}</div>
        <Space>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(addNewPost("发送成功"))}
          >
            发送
          </Button>
        </Space>
      </Card>
    </Card>
  );
};

export default Redux;
