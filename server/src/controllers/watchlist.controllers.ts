import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

interface BharatStockResponse {
  data: unknown[];
  pagination: {
    page: number;
    page_size: number;
    total: number;
  };
}

const getStocks = WrapAsync(async (req, res) => {
  const {
    page = "1",
    page_size = "50",
    q,
    sector,
    active_only = "true",
  } = req.query;

  const queryParams = new URLSearchParams({
    page: String(page),
    page_size: String(page_size),
    active_only: String(active_only),
  });

  if (q) {
    queryParams.set("q", String(q));
  }

  if (sector) {
    queryParams.set("sector", String(sector));
  }

  const response = await fetch(
    `https://bharatstockapi.com/v1/stocks?${queryParams.toString()}`,
    {
      headers: {
        "X-API-Key": process.env.WATCHLIST_API_KEY || "",
      },
    },
  );

  if (!response.ok) {
    throw new ApiError(
      response.status,
      "Failed to fetch stocks from BharatStock",
    );
  }

  const result = await response.json() as BharatStockResponse;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        stocks: result.data,
        pagination: result.pagination,
      },
      "Stocks fetched successfully",
    ),
  );
});


const getStockQuotes = WrapAsync(async (req, res) => {
  const { symbols } = req.query;

  if (!symbols) {
    throw new ApiError(400, "Symbols are required");
  }

  const symbolList = String(symbols)
    .split(",")
    .map((symbol) => symbol.trim().toUpperCase())
    .filter(Boolean);

  if (symbolList.length === 0) {
    throw new ApiError(400, "At least one valid symbol is required");
  }

  if (symbolList.length > 50) {
    throw new ApiError(400, "Maximum 50 symbols are allowed");
  }

  const apiKey = process.env.WATCHLIST_API_KEY;

  if (!apiKey) {
    throw new ApiError(
      500,
      "Watchlist API key is not configured",
    );
  }

  const queryParams = new URLSearchParams({
    symbols: symbolList.join(","),
  });

  const response = await fetch(
    `https://bharatstockapi.com/v1/stocks/quotes?${queryParams.toString()}`,
    {
      headers: {
        "X-API-Key": apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new ApiError(
      response.status,
      "Failed to fetch stock quotes",
    );
  }

  const quotes = await response.json();

  return res.status(200).json(
    new ApiResponse(
      200,
      quotes,
      "Stock quotes fetched successfully",
    ),
  );
});


export { getStocks,getStockQuotes };