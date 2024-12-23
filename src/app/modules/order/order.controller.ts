import { Request, Response } from "express";
import { IOrder } from "./order.interface";
import { OrderServices } from "./order.services";

const orderCar = async (req: Request, res: Response) => {
  try {
    const orderData: IOrder = req.body;
    const result = await OrderServices.orderCar(orderData);
    res.status(200).json({
      ...result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.json({
        message: "Error Occurred",
        status: false,
        error: error,
        stack: error.stack,
      });
    } else {
      res.json({
        message: "Error Occurred",
        status: false,
        error: error,
      });
    }
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getTotalRevenue();
    res.json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.json({
        message: "Error Occurred",
        status: false,
        error: error,
        stack: error.stack,
      });
    } else {
      res.json({
        message: "Error Occurred",
        status: false,
        error: error,
      });
    }
  }
};

export const OrderControllers = {
  orderCar,
  getTotalRevenue,
};
