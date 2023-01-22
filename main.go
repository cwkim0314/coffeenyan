package main

import (
	"database/sql"
	"fmt"

	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	db, err := sql.Open("mysql", "coffeenyan:password@(127.0.0.1:3306)/coffeenyan-db-local")
	if err != nil {
		panic(err)
	}

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

	type Cafe struct {
		CafeName    string `json:"CafeName"`
		CafeAddress string `json:"CafeAddress"`
		Coffee      Coffee `json:"Coffee"`
	}

	e.POST("/coffee", func(c echo.Context) error {

		emp := new(Cafe)
		if err := c.Bind(emp); err != nil {
			return err
		}

		sql2 := "INSERT INTO cafe(cafe_name, cafe_address) VALUES(?,?)"
		stmt2, err2 := db.Prepare(sql2)
		if err2 != nil {
			fmt.Print(err.Error())
		}
		defer stmt2.Close()
		result2, err4 := stmt2.Exec(emp.CafeName, emp.CafeAddress)
		if err4 != nil {
			panic(err4)
		}
		fmt.Println(result2.LastInsertId())

		var id int
		db.QueryRow("SELECT LAST_INSERT_ID() FROM cafe").Scan(&id)
		fmt.Print(id)

		sql := "INSERT INTO coffee(menu_name, acidity, aftertastes, aroma, balance, bitterness, body, sweetness, cafe_id ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
		stmt, err := db.Prepare(sql)
		if err != nil {
			fmt.Print(err.Error())
		}
		defer stmt.Close()
		result, err3 := stmt.Exec(emp.Coffee.MenuName, emp.Coffee.Acidity, emp.Coffee.Aftertastes, emp.Coffee.Aroma, emp.Coffee.Balance, emp.Coffee.Bitterness, emp.Coffee.Body, emp.Coffee.Sweetness, id)
		// Exit if we get an error
		if err3 != nil {
			panic(err3)
		}
		fmt.Println(result.LastInsertId())

		return c.JSON(http.StatusCreated, emp)
	})

	e.GET("/cafe/:id", func(c echo.Context) error {
		id := c.Param("id")
		fmt.Println(id)
		var cafe_name string
		var cafe_address string

		err = db.QueryRow("SELECT cafe_name, cafe_address FROM cafe WHERE cafe_id = ?", id).Scan(&cafe_name, &cafe_address)

		if err != nil {
			fmt.Println(err)
		}

		response := Cafe{CafeName: cafe_name, CafeAddress: cafe_address}
		return c.JSON(http.StatusOK, response)
	})

	e.Logger.Fatal(e.Start(":1323")) // localhost:1323

}
