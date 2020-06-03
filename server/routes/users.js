import express from "express";
import UserController from "../controllers/users";

const router = express.Router();

/* GET users listing. */
router.get("/fetch", async (req, res, next) => {
  try {
    const result = await UserController.fetchUsers();
    res.json({ success: true, data: result });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/add", async (req, res) => {
  const { userId, columnName, color } = req.body;

  try {
    const result = await UserController.addColumn({
      userId,
      columnName,
      color,
    });
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/delete", async (req, res) => {
  const { userId, columnIndex } = req.body;

  try {
    const result = await UserController.deleteColumn({
      userId,
      columnIndex,
    });
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});
router.post("/deleteCard", async (req, res) => {
  const { userId, columnIndex, cardIndex } = req.body;

  try {
    const result = await UserController.deleteCard({
      userId,
      columnIndex,
      cardIndex,
    });
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

router.post("/addCard", async (req, res) => {
  const { userId, columnIndex, cardName } = req.body;

  try {
    const result = await UserController.addCard({
      userId,
      columnIndex,
      cardName,
    });
    res.json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e,
    });
  }
});

export default router;
