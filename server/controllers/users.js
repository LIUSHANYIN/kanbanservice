import Users from "../models/User";
import paginate from "../helpers/paginate";

const fetchUsers = () => {
  return Users.find();
};

const addColumn = async ({ userId, columnName, color }) => {
  const { columnDate } = await Users.findById(userId);

  columnDate.push({
    cards: [{ title: "foo" }, { title: "bar" }],
    title: columnName,
    color: color,
  });

  return Users.findByIdAndUpdate(
    userId,
    {
      $set: {
        columnDate,
      },
    },
    {
      new: true,
    }
  );
};

const deleteColumn = async ({ userId, columnIndex }) => {
  const { columnDate } = await Users.findById(userId);

  columnDate.splice(columnIndex, 1);
  return Users.findByIdAndUpdate(
    userId,
    {
      $set: {
        columnDate,
      },
    },
    {
      new: true,
    }
  );
};

const deleteCard = async ({ userId, columnIndex, cardIndex }) => {
  const { columnDate } = await Users.findById(userId);

  columnDate[columnIndex].cards.splice(cardIndex, 1);

  return Users.findByIdAndUpdate(
    userId,
    {
      $set: {
        columnDate,
      },
    },
    {
      new: true,
    }
  );
};
const addCard = async ({ userId, columnIndex, cardName }) => {
  const { columnDate } = await Users.findById(userId);

  columnDate[columnIndex].cards.push({ title: cardName });
  return Users.findByIdAndUpdate(
    userId,
    {
      $set: {
        columnDate,
      },
    },
    {
      new: true,
    }
  );
};

const UserController = {
  fetchUsers,
  addColumn,
  deleteColumn,
  deleteCard,
  addCard,
};

export default UserController;
