//
//  LocalNotifications.swift
//  Labs8-MealHelper
//
//  Created by Simon Elhoej Steinmejer on 29/11/18.
//  Copyright © 2018 De MicheliStefano. All rights reserved.
//

import Foundation
import UserNotifications

class LocalNotificationHelper
{
    func getAuthorizationStatus(completion: @escaping (UNAuthorizationStatus) -> Void) {
        UNUserNotificationCenter.current().getNotificationSettings { (settings) in
            DispatchQueue.main.async {
                completion(settings.authorizationStatus)
            }
        }
    }
    
    func requestAuthorization(completion: @escaping (Bool) -> Void) {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { (success, error) in
            
            if let error = error { NSLog("Error requesting authorization status for local notifications: \(error)") }
            
            DispatchQueue.main.async {
                completion(success)
            }
        }
    }
    
    func createNotification(hour: Int, minute: Int, id: Int, note: String) {
        let content = UNMutableNotificationContent()
        content.title = "Meal reminder"
        content.body = note
        content.sound = UNNotificationSound.default
        
        var dateComponent = DateComponents()
        dateComponent.hour = 20
        dateComponent.minute = minute
        
        let notificationRequest = UNNotificationRequest(identifier: "\(id)", content: content, trigger: UNCalendarNotificationTrigger(dateMatching: dateComponent, repeats: false))
        
        let center = UNUserNotificationCenter.current()
        center.add(notificationRequest) { (error) in
            if let error = error {
                NSLog("There was an error scheduling a notification: \(error)")
            }
        }
    }
}
