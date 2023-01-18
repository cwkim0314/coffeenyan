package router

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo"
)

type User struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

func PostRating(c echo.Context) error {
	var user User
	if err := c.Bind(&user); err != nil {
		c.JSON(http.StatusBadRequest, nil)
	}
	//저장 로직
	fmt.Println(user)
	print("success rating")

	return c.JSON(http.StatusCreated, nil)
}
