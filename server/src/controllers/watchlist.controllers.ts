import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";


const getStocks = WrapAsync(async (req, res) => {
    const response = await fetch("https://bharatstockapi.com/v1/stocks", {
      headers: {
        "X-API-Key": process.env.WATCHLIST_API_KEY,
      },
    });
    const allStocks = await response.json();
    console.log(allStocks);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          allStocks.data,
          "All stocks data fetched successfully",
        ),
      );
  })