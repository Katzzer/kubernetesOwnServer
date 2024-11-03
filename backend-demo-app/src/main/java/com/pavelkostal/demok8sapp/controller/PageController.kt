package com.pavelkostal.demok8sapp.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@RestController
class PageController {

    @GetMapping("")
    fun showMessage():String {
        val now = LocalDateTime.now()
        val dateTimeFormatter = DateTimeFormatter.ISO_DATE_TIME
        return "Hello from Kotlin backend ( +" + now.format(dateTimeFormatter) + ")"
    }
}