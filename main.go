package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	// "time"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	db, err := sql.Open("mysql", "coffeenyan:password@(127.0.0.1:3306)/coffeenyan-db-local")
	if err != nil {
		panic(err)
	}

	var name string
	err = db.QueryRow("SELECT cafe_name FROM cafe WHERE cafe_id = 1").Scan(&name)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(name)
	print("success")

	defer db.Close()

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))
	type Coffee struct {
		MenuName    string `json:"MenuName"`
		Acidity     int    `json:"Acidity"`
		Aftertastes int    `json:"Aftertastes"`
		Body        int    `json:"Body"`
		Bitterness  int    `json:"Bitterness"`
		Sweetness   int    `json:"Sweetness"`
		Aroma       int    `json:"Aroma"`
		Balance     int    `json:"Balance"`
		CafeId      int    `json:"CafeId"`
	}
	// type CoffeeList struct {
	// 	CoffeeList []Coffee `json:"coffee"`
	// }

	e.POST("/coffee", func(c echo.Context) error {

		emp := new(Coffee)
		if err := c.Bind(emp); err != nil {
			return err
		}

		sql := "INSERT INTO coffee(menu_name, acidity, aftertastes, aroma, balance, bitterness, body, sweetness, cafe_id ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
		stmt, err := db.Prepare(sql)

		if err != nil {
			fmt.Print(err.Error())
		}
		defer stmt.Close()
		result, err2 := stmt.Exec(emp.MenuName, emp.Acidity, emp.Aftertastes, emp.Aroma, emp.Balance, emp.Bitterness, emp.Body, emp.Sweetness, emp.CafeId)

		// // Exit if we get an error
		if err2 != nil {
			panic(err2)
		}
		fmt.Println(result.LastInsertId())

		return c.JSON(http.StatusCreated, emp)
	})

	e.Logger.Fatal(e.Start(":1323")) // localhost:1323

}
