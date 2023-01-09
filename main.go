package main

import (
	"database/sql"
	"fmt"
	"log"

	// "time"

	"github.com/labstack/echo"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	db, err := sql.Open("mysql", "coffeenyan:password@(127.0.0.1:3306)/coffeenyan-db-local")
	if err != nil {
		panic(err)
	}

	// // See "Important settings" section.
	// db.SetConnMaxLifetime(time.Minute * 3)
	// db.SetMaxOpenConns(10)
	// db.SetMaxIdleConns(10)

	// fmt.Println("connect success", db)
	var name string
	err = db.QueryRow("SELECT cafe_name FROM cafe WHERE cafe_id = 1").Scan(&name)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(name)
	print("success")

	defer db.Close()

	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.File("coffeenyan-front/pages/_app.tsx")
	})

	e.Logger.Fatal(e.Start(":1323")) // localhost:1323

}
